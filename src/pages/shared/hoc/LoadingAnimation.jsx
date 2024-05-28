import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/loading-animation.json";

function LoadingAnimation() {
  return (
    <div className="d-flex justify-content-center my-5">
      <span style={{ width: 200 }}>
        <Lottie animationData={loadingAnimation} />
      </span>
    </div>
  );
}

export default LoadingAnimation;
