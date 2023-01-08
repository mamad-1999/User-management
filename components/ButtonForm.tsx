import { Button } from "@chakra-ui/react";

type ButtonProps = {
    type?: "button" | "submit" | "reset",
    width?: any,
    colorScheme: string,
    children: string | React.ReactNode,
    marginTop?: number,
    size?: string,
    leftIcon: JSX.Element,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any
};

const MyButton: React.FC<ButtonProps> = ({
    colorScheme,
    children,
    width,
    marginTop,
    size,
    type,
    leftIcon,
    onClick
}) => {
    return <Button
        type={type ? type : "button"}
        onClick={onClick}
        colorScheme={colorScheme}
        width={width}
        marginTop={marginTop}
        size={size}
        leftIcon={leftIcon}
    >{children}
    </Button>;
};

export default MyButton;