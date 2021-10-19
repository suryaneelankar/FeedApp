import React, {  useState  } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Dimensions, TextInput, Animated } from 'react-native';
import ThreeDotsImg from './FeedAssets/threeDots.png'
import { FlatList } from "react-native-gesture-handler";
import { FeedData } from "./configData";
import Share from "react-native-share";
import shareImg from "./FeedAssets/shareImg.png"
import LikeImg from "./FeedAssets/Like.png"
import saveimg from "./FeedAssets/save.png"
import commentImg from "./FeedAssets/comment.png"
import likeFull from "./FeedAssets/likeFull.png"
import happyImg from "./FeedAssets/happy.png"
import sadImg from "./FeedAssets/sad.png"
import BackArrow from "./FeedAssets/back_arrow.png"

const FeedApp = ({navigation}) => {
    const TopValue = new Animated.Value(0)



   const toggleMenu = () => {
        Animated.spring(TopValue, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true
        }).start()
    }


    const moveLikeAnimation = () => {
        Animated.timing(TopValue, {
            toValue: 300,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    const performAnimation = () => {
        return (
            <>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>

                        <Image
                            source={likeFull}
                            style={{
                                width: 26,
                                height: 26,
                                // resizeMode: 'contain',
                                marginHorizontal:10
                            }}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>

                        <Image
                            source={happyImg}
                            style={{
                                width: 26,
                                height: 26,
                                // resizeMode: 'contain',
                                marginHorizontal:30
                            }}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>

                        <Image
                            source={sadImg}
                            style={{
                                width: 26,
                                height: 26,
                                // resizeMode: 'contain',
                                marginHorizontal:50
                            }}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </>
        )
    }

    const myCustomShare = async (myPost) => {
        const shareOptions = {
            message: myPost,
        };
        try {
            const ShareResponse = await Share.open(shareOptions);
        } catch (error) {
            console.log("Error  ==>", error);
        }
    };
    var ActionTypes = [
        {
            "token": 1,
            "Type": "Like",
            "Image": LikeImg,

        },
        {
            "token": 2,
            "Type": "Comment",
            "Image": commentImg,

        },
        {
            "token": 3,
            "Type": "Save",
            "Image": saveimg,

        },
        {
            "token": 3,
            "Type": "Share",
            "Image": shareImg,

        },
    ]

    const renderHeader = () => {
        return (
            <View style={{ backgroundColor: '#7A22FF', height: 60, top: 0, flexDirection: 'row' }}>
     <TouchableOpacity
          onPress={() => {
              navigation.goBack();
          }}
        >
          <Image
            source={BackArrow}
            style={{
              width: 16,
              height: 16,
              marginHorizontal: 15,
              marginTop: 23,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        

                <Text style={{ color: 'white', marginTop: 20, marginHorizontal: 0, fontSize: 16 }}>Feed APP </Text>
            </View>
        )
    }

    const onClickAnyAction = (Type, PostDes) => {
        console.log(Type)
        if (Type == 'Share') {
            myCustomShare(PostDes)
        } else if (Type == 'Like') {
            moveLikeAnimation()
            // toggleMenu()
        }
    }
    console.log('renderHeader')

    return (
        <View style={styles.container}>
            {renderHeader()}
            <View style={{ flex: 1,backgroundColor: 'white',borderRadius:10,borderColor:'black',borderWidth:0 }}>
                <FlatList
                    numColumns={1}
                    scrollEnabled={true}
                    data={FeedData}
                    key={(item) => item}
                    renderItem={({ item, index }) => (
                        <>
                            {FeedData.map((anObjectMapped, index) => {
                                return (
                                    <>
                                        <View
                                            key={index}
                                            style={{ borderColor: '#F0F0F0', borderBottomWidth: 12, width: Dimensions.get('window').width - 20,borderRadius:10,borderColor:'black',borderWidth:1 }}
                                        >
                                            <View style={{ flexDirection: 'row', backgroundColor: '#FFDBE9', height: 70, width: Dimensions.get('window').width - 30, alignSelf: 'center', marginTop: 15,borderRadius:5 }}>
                                                <Image
                                                    source={{ uri: anObjectMapped.image_url }}
                                                    style={{
                                                        width: 63,
                                                        height: 63,
                                                        marginHorizontal: 0.5,
                                                        marginTop: 0.5,
                                                        borderWidth: 3,
                                                        borderRadius: 77,
                                                    }}
                                                />
                                                <View style={{}}>
                                                    <Text style={{ height: 40, color: 'black', marginTop: 10 }}> {anObjectMapped.name} {anObjectMapped.first_brewed}</Text>
                                                    <Text style={{ fontSize: 18, height: 40, color: 'black', bottom: 20, fontWeight: 'bold' }}> {anObjectMapped.tagline} </Text>
                                                </View>
                                            </View>

                                            <Text style={{ fontSize: 18, width: Dimensions.get('window').width - 30, marginTop: 15, color: 'black', alignSelf: 'center', bottom: 10 }}> {anObjectMapped.description} </Text>
                                            {/* brewers_tips */}
                                            <Text style={{ fontSize: 18, width: Dimensions.get('window').width - 30, marginTop: 15, color: 'black', alignSelf: 'center', bottom: 10 }}> {anObjectMapped.yeast} </Text>
                                            {/* {performAnimation()} */}
                                            <View style={{
                                                width: Dimensions.get('window').width, backgroundColor:'#FFDBE9',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                position: "absolute",
                                                marginTop: 15,
                                                bottom: 0,
                                                flexDirection: 'row',
                                                justifyContent: 'space-evenly',
                                            }}>


                                                {ActionTypes.map((anObjectMap, index) => {
                                                    return (
                                                        <>
                                                            <View style={{ flexDirection: 'row',backgroundColor:'#FFDBE9' }}>
                                                                <TouchableOpacity
                                                                    onPress={() => onClickAnyAction(anObjectMap.Type, anObjectMapped.description)}
                                                                    style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                                                    <Image
                                                                        source={anObjectMap.Image}
                                                                        style={{
                                                                            width: 25,
                                                                            height: 25,

                                                                        }}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>
                                                        </>
                                                    );
                                                })}

                                            </View>
                                        </View>
                                    </>
                                );
                            })}


                        </>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        justifyContent: "center",
                        paddingBottom: 0,
                        alignSelf: "center",
                    }}
                />
            </View>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    button: {
        // position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        // backgroundColor: 'green'
    }

})

export default FeedApp