import React, { useEffect, useRef, useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);
  const chatEndRef = useRef(null);
    
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080");

    socketRef.current.onopen = () => {
      console.log("Connected to server");
      setIsConnected(true);
    };

    socketRef.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    socketRef.current.onclose = () => {
      console.log("Disconnected from server");
      setIsConnected(false);
    };

    return () => socketRef.current.close();
  }, []);

  useEffect(() => {
    console.log(messages,'messages');
    
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(input);
      setInput("");
    } else {
      console.warn("WebSocket not connected yet!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>WebSocket Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "250px",
          overflowY: "scroll",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
          style={{ padding: "5px", width: "75%" }}
        />
        <button
          onClick={sendMessage}
          style={{ padding: "5px 10px" }}
          disabled={!isConnected}
        >
          Send
        </button>
      </div>
    </div>
  );
}
