import BackDrop from 'components/Backdrop/Backdrop';
import { InfinitySpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <BackDrop>
      <InfinitySpin width="200" color="#a9584d" />
    </BackDrop>
  );
};
export default Loader;
