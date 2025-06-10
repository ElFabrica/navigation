import {View} from "react-native"

import { Header } from "@/components/Header"
import { Title } from "@/components/Title"
import { ButtonIcon } from "@/components/ButtonIcon"


export function Product(){
    return(
    <View style={{flex: 1, padding: 32}}>
        <Header>
            <ButtonIcon name="arrow-circle-left"/>
            <Title>Home</Title>
        </Header>

    </View>
    )
}