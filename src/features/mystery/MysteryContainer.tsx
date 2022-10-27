import { MysteryComponent } from "./MysteryComponent";
import logo from "../../logo.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { randPos, selectPos } from "./mysterySlice";

export const MysteryContainer = () => {
  const pos = useAppSelector(selectPos);
  const dispatch = useAppDispatch();

  return (
    <>
      <MysteryComponent
        style="primary"
        icon={<img src={logo} alt="logo" className="logo" />}
        iconPos={pos}
        size="large"
      >
        <p>{pos}</p>
      </MysteryComponent>

      <button onClick={() => dispatch(randPos())}>
        parent container, get random pos
      </button>
    </>
  );
};
