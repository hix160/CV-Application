/* eslint-disable react/prop-types */

function GeneralSection({ sectionTitle, sectionKey, fieldsConfig, formData, setFormData }) {
    /*
    e.target - input field that triggered a change event
    name - unique key for the field (fullName)
    value - current value entered by the user
    */
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      // Update formData based on the sectionKey
      setFormData((prevFormData) => ({
        ...prevFormData,
        [sectionKey]: {
          ...prevFormData[sectionKey],
          [name]: value, // Update the specific field
        }
      }));
    };
  
    return (
      <div id={`input-${sectionKey}`} style={{padding:"1rem"}}>
        <h2>{sectionTitle}</h2>
        {fieldsConfig.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}: </label>
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder || ""}
              required={field.required || false}
            />
          </div>
        ))}
      </div>
    );
  }
  
  export default GeneralSection;
  