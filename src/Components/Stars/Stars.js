import React from "react";
import { StarRounded as StarRoundedIcon,
StarHalfRounded as StarHalfRoundedIcon
} from '@mui/icons-material';

function Stars(props){

  var star_num = props?.review;
  console.log("starnum "+props?.review+" "+ typeof(props?.review));
  var isInteger = !(star_num?.indexOf('.') == -1);
  var whole_stars = []
  for (let i = 0; i < Math.floor(star_num); i++) {
    whole_stars.push(<StarRoundedIcon sx={{ color: "#E7B80F" }} />);
  }
  whole_stars.push(isInteger ? <StarHalfRoundedIcon sx={{ color: "#E7B80F" }} /> : null);
  return (
    <div className="star__div">
      {whole_stars}
    </div>
  );
}

export default Stars;