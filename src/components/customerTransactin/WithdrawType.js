import { useEffect } from "react";

const Withdraw = (props) => {
  useEffect(() => {
    props.setdata({ ...props.getdata, accounttype: "saving" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      <li>
        <label className="la">
          Account Type <span>*</span>
        </label>
        <select className="box" name="accounttype">
          <option>saving</option>
        </select>
      </li>
    </ul>
  );
};
export default Withdraw;
