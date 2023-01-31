import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  
const PageOne = () =>{

    const [myUserData, setMyUserData] = useState();

      const getData = async () => {
        try {
           const response = await fetch("https://thapatechnical.github.io/userapi/users.json"
           );
          const myData = await response.json();
          setMyUserData(myData);
          
         // console.log(myData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { 
        getData();
    },[]);

    return(
        <View style = {styles.mainContainer}>
            <Text style = {styles.mainHeader}>List of People</Text>
            <FlatList
            data={myUserData}
            renderItem={({item})=>{
            return(
                <View style = {styles.card}>
                    <View style = {styles.imgContainer}>
                        <Image
                            style={styles.imgStyle}
                            resizeMode="cover"
                            source={{uri: item.image}}
                        />
                    </View>
                        <View>
                            <View style={styles.bioDataContainer}>
                                <Text style={styles.bioData}> Bio Data</Text>
                                <Text style={styles.idNumber}>{item.id}</Text>
                            </View>
                            <View style={styles.mainContain}>
                                <Text style={styles.myName}>Name: {item.name}</Text>
                                <Text style={styles.myName}>emial: {item.email}</Text>
                                <Text style={styles.myName}>phone: {item.mobile}</Text>
                            </View>
                        </View>
                    
                </View>
            );
            }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer:{
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
    },
    mainContain:{
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#353535",
    },
    mainHeader:{
        fontSize:30,
        color:"black"
    },
    card:{
        width:250,
        backgroundColor:"#fff",
        borderRadius:5,
        marginVertical:20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    },
    bioDataContainer:{
        with:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#353535",
        paddingVertical:10,
    },
    imgContainer:{
        padding:10,
    },
    imgStyle:{
        width:"100%",
        height:180,
    },
    bioData:{
        fontSize:30,
        color:"#fff",
    },
    idNumber:{
        fontSize:20,
        color:"#fff",
    },
    myName:{
        fontSize:15,  
        color:"#fff",       
    },
    

});

export default PageOne;