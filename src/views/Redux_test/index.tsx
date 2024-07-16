import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from "@/store/action";
import { AppDispatch, RootState } from "@/store/index";
import Title from "@/components/globalTitle";
import { Button } from "antd";
import { add1, remove1, update1 } from "@/store/countReducersSlice";

const ReduxTest = () => {
  const myRef1 = useRef<HTMLInputElement>(null);
  const myRef2 = useRef<HTMLInputElement>(null);
  const myRef3 = useRef<HTMLInputElement>(null);

  const count = useSelector((state: RootState) => state.count.count);
  const count1 = useSelector((state: RootState) => state.count1.count);
  const dispatch = useDispatch<AppDispatch>();
  const addEvent = () => {
    dispatch(add1(parseInt(myRef1.current?.value as string)));
  };
  const removeEvent = () => {
    dispatch(remove1(myRef2.current?.value));
  };
  const updateEvent = () => {
    dispatch(update1(myRef3.current?.value));
  };
  return (
    <div>
      <Title title="Redux学习" />
      <div>count:{count}</div>
      <div>count1:{count1}</div>
      <Button onClick={addEvent}>add</Button>
      <input type="number" ref={myRef1} />
      <Button onClick={removeEvent}>remove</Button>
      <input type="number" ref={myRef2} />
      <Button onClick={updateEvent}>update</Button>
      <input type="number" ref={myRef3} />
    </div>
  );
};

export default ReduxTest;
