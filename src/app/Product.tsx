import {View} from "react-native"
import { StackRoutesProps } from "@/routes/StackRoutes"
import { useRoute } from "@react-navigation/native"

import { Header } from "@/components/Header"
import { Title } from "@/components/Title"
import { ButtonIcon } from "@/components/ButtonIcon"


type RouteParams =  StackRoutesProps <"product">

export function Product( { navigation ,route }:StackRoutesProps<"product"> ){
const { params } = useRoute <RouteParams["route"]> ()   

    return(
    <View style={{flex: 1, padding: 32}}>
        <Header>
            <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack}/>
            <Title> {params?.id}</Title>
            {/*<Title> {route.params?.id}</Title>*/}
        </Header>

    </View>
    )
}