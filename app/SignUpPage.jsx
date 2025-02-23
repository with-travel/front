import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Platform, BackHandler } from "react-native";
import { useRouter } from "expo-router"
import { ArrowSvg } from "../assets/images/svg";
import { widthPercentage, heightPercentage, fontPercentage } from "./ResponsiveSize";


export default function SignUpPage() {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const [nickname, setNickname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState(null);
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isVerified, setIsVerified] = useState(false);

    const handlePhoneVerification = () => {
        if (phoneNumber.trim() !== "") {
            setIsVerified(true);
            alert("인증 요청 성공!");
        }
    };


    useEffect(() => {
        setIsNextEnabled(nickname.trim() !== "" && birthdate.trim() !== "" && gender !== null);
    }, [nickname, birthdate, gender]);

    useEffect(() => {
        const backAction = () => {
            if (step === 2) {
                setStep(1);
                return true;
            } else {
                router.back();
                return true;
            }
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

        return () => backHandler.remove();
    }, [step]);

    const goToPreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            router.back();
        }
    };

    const goToNextStep = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            router.push("/SurveyPage");   
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>회원가입</Text>
                <TouchableOpacity style={styles.backButton} onPress={goToPreviousStep}>
                    <ArrowSvg style={styles.arrowIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { backgroundColor: step === 1 ? "#359D66" : "#D9D9D9" }]} />
                <View style={[styles.progressBar, { backgroundColor: step === 2 ? "#359D66" : "#D9D9D9" }]} />
            </View>
            {step === 1 && (
                <View style={styles.stepContainer}>
                    <Text style={styles.label}>닉네임</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="사용하실 닉네임을 입력해주세요"
                        value={nickname}
                        onChangeText={setNickname}
                    />
                    <Text style={styles.label}>생년월일</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="생년월일 입력"
                        keyboardType="numeric"
                        value={birthdate}
                        onChangeText={setBirthdate}
                    />
                    <Text style={styles.label}>성별</Text>
                    <View style={styles.genderContainer}>
                        <TouchableOpacity
                            style={[styles.genderButton, gender === "male" && styles.selectedGender]}
                            onPress={() => setGender("male")}
                        >
                            <Text style={[styles.genderlabel, gender === "male"]}>남자</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.genderButton, gender === "female" && styles.selectedGender]}
                            onPress={() => setGender("female")}
                        >
                            <Text style={[styles.genderlabel, gender === "female"]}>여자</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.nextButton, { opacity: isNextEnabled ? 1 : 0.5 }]}
                            onPress={goToNextStep}
                            disabled={!isNextEnabled}
                        >
                            <Text style={styles.buttonText}>다음</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {step === 2 && (
                <View style={styles.stepContainer}>
                    <Text style={styles.label}>휴대폰 인증</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="전화번호 입력"
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={(text) => {
                            setPhoneNumber(text);
                            setIsVerified(false);
                        }}
                    />
                    <TouchableOpacity
                        style={[styles.verifyButton, { opacity: phoneNumber.trim() !== "" ? 1 : 0.5 }]}
                        onPress={handlePhoneVerification}
                        disabled={phoneNumber.trim() === ""}
                    >
                        <Text style={styles.buttonText}>인증 요청</Text>
                    </TouchableOpacity>

                    <View style={styles.termsBox}>
                        <Text style={styles.label}>약관</Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.nextButton, { opacity: isVerified ? 1 : 0.5 }]}
                        onPress={goToNextStep}
                        disabled={!isVerified}
                    >
                        <Text style={styles.buttonText}>다음</Text>
                    </TouchableOpacity>

                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: "row",
        borderBottomWidth: widthPercentage(1),
        borderBottomColor: "#E9E9E9",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: widthPercentage(20),
        paddingVertical: heightPercentage(5),
    },
    arrowIcon: {
        width: widthPercentage(20),
        height: heightPercentage(20),
        justifyContent: "center",
    },
    title: {
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: fontPercentage(20),
        fontWeight: "bold",
    },
    progressContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: heightPercentage(10),
    },

    progressBar: {
        width: widthPercentage(175),
        height: heightPercentage(4),
        borderRadius: 9,
        marginHorizontal: widthPercentage(5),
    },

    stepContainer: {
        flex: 1,
        paddingHorizontal: widthPercentage(20),
    },
    input: {
        width: widthPercentage(356),
        height: heightPercentage(50),
        backgroundColor: "#F3F3F3",
        borderRadius: 5,
        paddingHorizontal: widthPercentage(10),
        marginVertical: heightPercentage(10),
    },
    backButton: {
        width: widthPercentage(70),
        height: heightPercentage(50),
        top: heightPercentage(3),
        justifyContent: "center",
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: "auto",
        marginBottom: heightPercentage(60),
        width: "100%",
    },
    nextButton: {
        marginTop: heightPercentage(20),
        width: "100%",
        paddingVertical: heightPercentage(15),
        backgroundColor: "#359D66",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        opacity: 0.5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: fontPercentage(16),
    },
    label: {
        fontSize: fontPercentage(16),
        fontWeight: "bold",
        marginTop: heightPercentage(10),
        left: widthPercentage(5),
    },
    genderlabel: {
        fontSize: fontPercentage(16),
        fontWeight: "bold",
        bottom: heightPercentage(2),
    },
    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: heightPercentage(10),
    },
    genderButton: {
        width: widthPercentage(172),
        height: heightPercentage(50),
        backgroundColor: "#F3F3F3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    selectedGender: {
        backgroundColor: "#D9D9D9",
    },
    verifyButton: {
        marginTop: heightPercentage(10),
        paddingVertical: heightPercentage(10),
        backgroundColor: "#359D66",
        alignItems: "center",
        borderRadius: 5,
        width: "100%",
    },
    termsBox: {
        width: "100%",
        height: heightPercentage(357),
        backgroundColor: "#f5f5f5",
        marginTop: heightPercentage(10),
        borderRadius: 5,
    },
});
