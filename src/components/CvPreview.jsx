/* eslint-disable react/prop-types */
import "./CvPreview.css";
import envelopeIcon from "../assets/envelope.svg";
import mapIcon from "../assets/map.svg";
import phoneIcon from"../assets/phone.svg";

function CvPreview({ formData }) {

    const iconMapping = {
        phone: phoneIcon,
        generalAddress: mapIcon,
        email: envelopeIcon,
    };

    const renderSectionHeading = (sectionName) => {
        if (sectionName === "workData") return "Work Experience";
        if (sectionName === "educationData") return "Education";
        return null; // For all other sections, return null (no heading)
    };
    // Filter out any empty or undefined fields for cleaner display
    return (
        <div id="cv-preview">
            
            {Object.entries(formData).map(([sectionName, sectionData]) => {
                    const filledEntries = Object.entries(sectionData).filter(([, value]) => value);

                    return filledEntries.length > 0 ? (
                        <div key={sectionName} id={`data-${sectionName}`} style={{padding:"1.5rem"}} className="cv-data">
                            {renderSectionHeading(sectionName) && (
                            <h2>{renderSectionHeading(sectionName)}</h2>
                            )}
                            {filledEntries.map(([fieldName, value]) => (
                                <p key={fieldName} id={fieldName} style={{ margin: 0 }}>
                                    {iconMapping[fieldName] && (
                                    <img
                                        src={iconMapping[fieldName]}
                                        alt={`${fieldName} icon`}
                                        style={{ width: "1rem", height: "1rem", marginRight: "4px", verticalAlign: "middle" }}
                                    />
                                )}  {value}
                                </p>
                            ))}
                        </div>
                    ) : null;
                })}
        </div>
    );
}


export default CvPreview;
