import '../styles/addContainer.css'
const AddContainer = () => {
    return (
        <>
            <header className="addContainer text-white p-3">
                <h3>Add Container</h3>
                    <div className="row">
                        <div className="col-3">
                        <p>Tone:</p>
                            <select className="form-select mb-3">
                                <option value={"default"}>C</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <p>Harmony:</p>
                            <select className="form-select">
                                <option value="default">Default</option>
                            </select>
                        </div>
                </div>
                
            </header>
            
            
        </>
    )
}

export default AddContainer