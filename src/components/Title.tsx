import {Text, StyleSheet, TextProps} from "react-native"

export function Title ({children, ...props}: TextProps) {
    return(
 <Text style={{fontSize:24, fontWeight: "bold"}} {...props}>
    {children}
 </Text>
 )

}