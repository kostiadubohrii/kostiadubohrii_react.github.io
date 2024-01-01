import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
};

const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label className="checkbox">
                <input type="checkbox" {...props} {...field}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}   
        </>
    )
}

const CustomForm = () => {
    return (
        <Formik
            initialValues = {{ 
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}

            validationSchema = {Yup.object({
                name: Yup.string()
                         .min(2, 'Mininum 2 symbols!')
                         .required('Required field!'),
                email: Yup.string()
                          .email('Invalid email address!')
                          .required('Required field!'),
                amount: Yup.number()
                          .min(5, 'Must be more than 5!')
                          .required('Required field!'),
                currency: Yup.string()
                             .required('Chose the currency!'),
                text: Yup.string()
                         .min(10, 'Must be more than 10 symbols!'),
                terms: Yup.boolean()
                          .required('Agreement is necessary!')
                          .oneOf([true], 'Agreement is necessary!')
                          
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <MyTextInput
                    label="Ваше имя"
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput
                    label="Ваша почта"
                    id="email"
                    name="email"
                    type="email"
                />

                <MyTextInput
                    label="Количество"
                    id="amount"
                    name="amount"
                    type="number"
                />
                <label htmlFor="currency">Валюта</label>
                <Field 
                    id="currency"
                    name="currency"
                    as="select"
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div" />                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div" />
                <MyCheckBox 
                    name="terms">
                        Соглашаетесь с политикой конфиденциальности?
                </MyCheckBox>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;