import AxisSelector from "./AxisSelector"
const NegativeTab = ({axis,onChange,onSubmit}) => {
    return (
      <>
        <AxisSelector onSelectAxis={onChange} />
        <h2 style={{marginTop: '10px'}}>Negative Control</h2>
        <p>Axis: {axis.axisName}</p>
        <p>Tone: {axis.axisTonal}</p>
        <p>State: {axis.negative ? "Negative" : "Normal"}</p>

      <button className="btn btn-primary btn-generate" style={{marginTop: '20px'}} onClick={onSubmit}>Submit</button>
      </>
    )
}   

export default NegativeTab
