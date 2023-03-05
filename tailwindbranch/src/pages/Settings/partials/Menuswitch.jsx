import { Switch  } from 'antd';
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Menuswitch = ({checked, onClick}) => <Switch checked={checked} onClick={onClick}   onChange={onChange} />;
export default Menuswitch;

export const MenuCheckBox = () =>{
  return(
    <>
    <input className='rounded-md border-gray-400  focus:border-green-300' type="checkbox" />
    </>
  )
}