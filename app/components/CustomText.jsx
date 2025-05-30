import { Text } from "react-native";

const CustomText = ({ children, style }) => {
  return (
    <Text style={[{ fontFamily: 'Poppi' }, style]}>{children}</Text>
  );
};

export default CustomText;