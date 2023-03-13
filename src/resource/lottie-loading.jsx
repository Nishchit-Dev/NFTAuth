import { useLottie } from "lottie-react";
import loader from './loading.json'

const LottieLoader = () => {
  const options = {
    animationData: loader,
    loop: true, 
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottieLoader;