import React , {memo} from "react";

const PureComponentInput = memo(function PureComponentInput ({name,email}) {
    console.log("came here")
    return(
      <div>
           <p>{name}</p>
      </div>
    );
  })

export default PureComponentInput