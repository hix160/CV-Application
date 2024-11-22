import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
/*

Things needed for the CV application
  -Section for general info. (name, email, phone number, place of residence)
  -Section for educational expierience (school name, title of study, date of study)
  ======= 2 text fields, 1 date field
  -Section for practical expierience (company name, position title, main responsibilities of your job,
  date from and until when you worked for that company)
  ======= 3 text fields, 1 date field
  -Have a preview of made CV


  # Each setion has to include an edit and submit button

*/




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>
)
