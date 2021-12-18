import React, { useState } from "react";
import { auth,createUserWithEmailAndPassword,sendEmailVerification ,db,setDoc,doc,collection,signInWithCredential,firebaseConfig } from "../../src/firebase/Firebase";

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Picker
} from "react-native";

const ApplyForm =  () => {
    const [Name, setname] = useState("");
    const [Fathername, setFathername] = useState("")
    const [CNIC, setCNIC] = useState("")
    const [FamilyMember, setFamilyMember] = useState("")
    const [selectedValue, setSelectedValue] = useState("Monthly");
    const handleSignUp = async  () => {
        let Requestobj = {
            Name,
            Fathername,
            CNIC,
            FamilyMember,
            selectedValue,
        };
        const Request = doc(db,'UserRequest',CNIC,);
        await setDoc(Request,Requestobj)
        alert("request successful")
        setname(" ")
        setFathername(" ")
        setCNIC(" ")
        setFamilyMember(" ")  
        setSelectedValue("Monthly")
        console.log(Requestobj,"req");
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter Name"
                        value={Name}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setname(text)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Enter Father Name"
                        value={Fathername}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setFathername(text)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="CNIC number"
                        value={CNIC}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setCNIC(text)} />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Family Member."
                        value={FamilyMember}
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setFamilyMember(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ border:"none" ,width:"100px"}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Monthly" value="m30" />
                        <Picker.Item label="Daily one time" value="d1" />
                        <Picker.Item label="Daily two time" value="d2" />
                        <Picker.Item label="Daily thre time" value="d3" />
                    </Picker>
                </View>

                <TouchableOpacity onPress={handleSignUp} style={styles.getHelpBtn}>
                    <Text style={styles.loginText}>Get food</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        marginTop:"20"
    },


    scrollView: {
        marginHorizontal: 20,
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "80%",
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 5,
    },

    TextInput: {
        width: "100%",
        borderRadius: 30,
        padding: 10,
  
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    image: {
        marginBottom: 30,
        width: 300,
        height: 250,
        padding: 50
    },

getHelpBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        // backgroundColor: "#00000",
    },
});

export default ApplyForm;