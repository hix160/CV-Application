import { useState } from 'react';
import GeneralSection from './components/GeneralSection';
import CvPreview from './components/CvPreview';
import './App.css';
import workImg from'./assets/work.png';
import educationImg from './assets/education.png'
import arrowImg from'./assets/arrow.png';

function App() {
  const [formData, setFormData] = useState({
    generalData: {
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      generalAddress: "123 Main St",
    },
    workData: {
      previousJob: "Software Engineer",
      jobDescription: "I was responsible for planning and developing software solutions and web applications, supporting and maintaining a company’s websites and digital products. The day-to-day work of the web developer highly depends on constantly evolving internet innovations. ",
      jobDate: "2015-06-01",
      jobAddress: "Tech Corp, 456 Tech Blvd",
    },
    educationData: {
      school: "Tech University",
      degree: "Bachelor's in Computer Science",
      schoolDate: "2010-09-01",
      schoolAddress: "Tech University, 789 University Ave",
    },
  });

  const[isOpen1, setIsOpen1] = useState(false);
  const[isOpen2, setIsOpen2] = useState(false);

  const fieldsConfig = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: true },
    { name: "generalAddress", label: "Address", type: "text", placeholder: "Enter your address", required: true },
  ];

  const jobFieldsConfig = [
    { name: "previousJob", label: "Previous Job", type: "text", placeholder: "Enter your previous job title", required: true },
    { name: "jobDescription", label: "Job Description", type: "text", placeholder: "Describe your job responsibilities", required: true },
    { name: "jobDate", label: "Date From", type: "date", required: true },
    { name: "jobAddress", label: "Address", type: "text", placeholder: "Enter the address of the workplace", required: true },
  ];

  const schoolFieldsConfig = [
    { name: "school", label: "Finished school", type: "text", placeholder: "Enter school / university", required: true },
    { name: "degree", label: "Degree", type: "text", placeholder: "Enter Degree / Field of study", required: true },
    { name: "schoolDate", label: "Date From", type: "date", required: true },
    { name: "schoolAddress", label: "Address", type: "text", placeholder: "Enter the address of the school / university", required: true },
  ];

  return (
    <div>
      <div id='input-fields'>
        <h1>CV Application</h1>

        <GeneralSection
          sectionTitle="Personal info"
          sectionKey="generalData"
          fieldsConfig={fieldsConfig}
          formData={formData.generalData}
          setFormData={setFormData}
        />
        
        <button className='drop-down' onClick={()=>setIsOpen1(!isOpen1)}>
          <img className='icon' src={workImg} alt="" />
          <p>Work Experience</p>
          <img className={isOpen1? 'arrow active' : 'arrow'} src={arrowImg} alt="" />
        </button>
        {isOpen1 && (
          <GeneralSection
          sectionTitle="Work Experience"
          sectionKey="workData"
          fieldsConfig={jobFieldsConfig}
          formData={formData.workData}
          setFormData={setFormData}
        />
        )}

        <button className='drop-down' onClick={()=>setIsOpen2(!isOpen2)}>
          <img className='icon' src={educationImg} alt="" />
          <p>Education</p>
          <img className={isOpen2? 'arrow active' : 'arrow'} src={arrowImg} alt="" />
        </button>
        {isOpen2 && (
          <GeneralSection
          sectionTitle="Education"
          sectionKey="educationData"
          fieldsConfig={schoolFieldsConfig}
          formData={formData.educationData}
          setFormData={setFormData}
        />
        )}

        
      </div>
      

      <CvPreview formData={formData} />
    </div>
  );
}

export default App;
