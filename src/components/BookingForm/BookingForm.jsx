import './BookingForm.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

function BookingForm({availableTimes, setSelectedDate, submitForm}) {
    const today = new Date();
    const oneYearFromNow = new Date(new Date().setFullYear(today.getFullYear() + 1));


    const validationSchema = Yup.object().shape({
        date: Yup
            .date()
            .min(today, "Reservation date cannot be in the past")
            .max(oneYearFromNow, `Reservation date cannot be more than one year in the future`)
            .required('Date is required'),
        time: Yup
            .string()
            .required('Time is required'),
        guests: Yup
            .number()
            .min(1, 'At least one guest is required')
            .max(10, 'Maximum of 10 guests allowed')
            .required('Number of guests is required'),
        occasion: Yup
            .string()
            .required('An occasion is required'),

    });

    const initialValues = {
        date: '',
        time: '',
        guests: 1,
        occasion: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                submitForm(values);
            }}
        >
            {(formik) => (
                <Form className={'booking_form'}>

                    <label htmlFor="res-date">Choose date</label>
                    <div>
                        <Field type="date" name="date" id="res-date" onChange={e => {
                            formik.setFieldValue('date', e.target.value);
                            setSelectedDate(e.target.value);
                        }}/>
                        <ErrorMessage name="date" component="div" className="error"/>
                    </div>

                    <label htmlFor="res-time">Choose time</label>
                    <div>
                        <Field as="select" name="time" id="res-time">
                            <option value="" disabled>Select a Time</option>
                            {
                                availableTimes.map(
                                    (time, index) =>
                                        <option key={index} value={time}>{time}</option>)
                            }
                        </Field>
                        <ErrorMessage name="time" component="div" className="error"/>
                    </div>

                    <label htmlFor="guests">Number of guests</label>
                    <div>
                        <Field type="number" name="guests" min="1" max="10" id="guests"/>
                        <ErrorMessage name="guests" component="div" className="error"/>
                    </div>
                    <label htmlFor="occasion">Occasion</label>
                    <div>
                        <Field as="select" name="occasion" id="occasion">
                            <option value="None">Select an Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </Field>
                        <ErrorMessage name="occasion" component="div" className="error"/>
                    </div>
                    <button type="submit" className="form_submit_button" disabled={
                        !formik.isValid ||
                        formik.isSubmitting ||
                        !(formik.touched.date && formik.touched.time && formik.touched.occasion)
                    }>
                        Make Your Reservation
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default BookingForm;
