import { Key } from "react"
import { Flex, Stack } from "@chakra-ui/react"
import { Form, Formik, } from "formik"
import * as Yup from "yup"
import RadioInput from "../components/RadioInput"
import UserInput from "../components/UserInput"
import MyButton from "../components/ButtonForm"
import { useAppDispatch } from "../app/hook"
import { formAction } from "../app/slice/formSlice"
import { useAddUserMutation } from "../app/api/userApi"
import { useAppSelector } from "../app/hook"
import { userAction } from "../app/slice/userSlice"

export interface MyFormValue {
    _id?: Key | null | undefined
    firstName: string,
    lastName: string,
    email: string,
    salary: string,
    birthdayDate: string,
    status: "Active" | "InActive"
}

const AddUserForm = () => {
    const state = useAppSelector(state => state.form)
    const dispatch = useAppDispatch()
    const [addUser, { isSuccess }] = useAddUserMutation()
    const initialValues: MyFormValue = {
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
        birthdayDate: "",
        status: "Active"
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Field is required!"),
        lastName: Yup.string().required("Field is required!"),
        email: Yup.string().required("Field is required!").email("Email not valid"),
        salary: Yup.string().required("Field is required!"),
        birthdayDate: Yup.string().required("Field is required!"),
    })

    const onSubmit = async (data: MyFormValue, { resetForm }: any) => {
        await addUser(data)
        resetForm({})
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <Flex
                    marginTop={4}
                    flexWrap='wrap'
                    justifyContent="space-around"
                    alignItems="center"
                    gap="4"
                >
                    <UserInput type="text" name="firstName" label='First name' />
                    <UserInput type="text" name="lastName" label='Last name' />
                    <UserInput type="email" name="email" label='Email' />
                    <UserInput type="date" name="birthdayDate" label='Birthday date' />
                    <UserInput type="text" name="salary" label='Salary' />
                    <RadioInput name="status" />
                </Flex >
                <Stack direction={{ base: "column", "md": "row" }} justifyContent="center" spacing={4} marginTop={8}>
                    <MyButton
                        type="submit"
                        width={{ base: "100%", "md": "300px" }}
                        colorScheme={state.editMode ? "yellow" : 'whatsapp'}>
                        {state.editMode ? "Update User" : "Add User"}
                    </MyButton>
                    <MyButton
                        onClick={() => {
                            if (state.editMode) {
                                dispatch(formAction.disableEditMode())
                                dispatch(userAction.removeUpdateId())
                                return
                            }
                            dispatch(formAction.removeForm())
                        }}
                        width={{ base: "100%", "md": "200px" }}
                        colorScheme='red'>
                        {state.editMode ? "Cancel Edit mode" : "Close Form"}
                    </MyButton>
                </Stack>
            </Form>
        </Formik>
    )
}

export default AddUserForm