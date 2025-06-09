import {View} from "react-native"

import { Header } from "@/components/header"
import { Title } from "@/components/title"
import { ButtonIcon } from "@/components/buttonIcon"


export function Home(){
    return(
    <View style={{flex: 1, padding: 32}}>
        <Header>
            <Title>Home</Title>
            <ButtonIcon name="add-circle"/>
        </Header>

    </View>
    )
}