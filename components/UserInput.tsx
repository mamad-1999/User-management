import { FormControl, FormLabel, Input, FormHelperText } from "@chakra-ui/react"
import { Field, FieldProps, ErrorMessage } from "formik"

interface InputProps<T> {
    label: T,
    name: T,
    type: T
}

const UserInput = (props: InputProps<string>) => {
    return (
        <Field name={props.name}>
            {({ field, form }: FieldProps) => {
                return (
                    <FormControl
                        width="400px"
                        id={props.name}
                        isInvalid={!!form.errors[props.name] && !!form.touched[props.name]}
                    >
                        <FormLabel>{props.label}</FormLabel>
                        <Input size='lg' marginBottom={1} type={props.type} {...field} />

                        <ErrorMessage name={props.name} />
                    </FormControl>
                )
            }}
        </Field>
    )
}

export default UserInput