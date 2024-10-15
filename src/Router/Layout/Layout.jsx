import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearQueueCompAction } from "../../store/queueCompReducer/queueCompReducer";

const Layout = () => {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.queue.queueCompData);

  useEffect(() => {
    if (queue.length) {
      let index = 0;
      const getTimeoutFunc = () => {
        setTimeout(() => {
          const item = queue[index];
          item.callback()
          index++;
          if (index < queue.length) getTimeoutFunc();
        }, 500);
      };
      getTimeoutFunc();
      dispatch(clearQueueCompAction());
    }
  }, [queue]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
