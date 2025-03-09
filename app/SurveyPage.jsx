import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, BackHandler, Platform, StatusBar, KeyboardAvoidingView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { widthPercentage, heightPercentage, fontPercentage } from "../assets/ResponsiveSize";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const SurveyPage = () => {
    const [step, setStep] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [selfIntro, setSelfIntro] = useState("");
    const router = useRouter();

    const questions = [
        { id: 1, question: "여행 일정 계획은\n어떻게 진행하는 편인가요?", options: ["계획파", "즉흥파"] },
        { id: 2, question: "단체에서 나의 캐릭터는\n무엇인가요?", options: ["리더형", "조력자형", "메이커형", "찬성형"] },
        { id: 3, question: "선호하는 여행 스타일은\n무엇인가요?", options: ["부지런 + 활발", "여유 + 느긋"] },
        { id: 4, question: "여행에서 제일 중요하게\n생각하는 것은 무엇인가요?", options: ["맛집 탐방", "문화 탐방", "사진 찍기", "풍경 즐기기", "쇼핑", "스포츠"], limit: 2 },
        { id: 5, question: "마지막으로,\n자기소개서를 작성해주세요!", subText: "자세히 작성할수록 좋은 동행을 찾을 확률이 높아져요." },
    ];

    useEffect(() => {
        const backAction = () => {
            if (step > 1) {
                setStep((prevStep) => prevStep - 1);
                return true;
            }
            return false;
        };

        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, [step]);

    const currentQuestion = questions[step - 1];

    if (!currentQuestion) {
        router.push("/MainPage");
        return null;
    }

    const handleSelectOption = (option) => {
        if (currentQuestion.limit) {
            const selectedList = selectedOptions[step] || [];
            if (selectedList.includes(option)) {
                setSelectedOptions({
                    ...selectedOptions,
                    [step]: selectedList.filter((item) => item !== option),
                });
            } else if (selectedList.length < currentQuestion.limit) {
                setSelectedOptions({
                    ...selectedOptions,
                    [step]: [...selectedList, option],
                });
            }
        } else {
            setSelectedOptions({ ...selectedOptions, [step]: [option] });
        }
    };

    const isNextEnabled = step < questions.length
        ? selectedOptions[step] && selectedOptions[step].length > 0
        : selfIntro.trim() !== "";

    const goToNextStep = () => {
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            router.push("/MainPage");
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
            <View style={styles.progressBarContainer}>
                {questions.map((_, i) => (
                    <View key={i} style={[styles.progressBar, { backgroundColor: i === step - 1 ? "#359D66" : "#E0E0E0" }]} />
                ))}
            </View>

            <Text style={styles.fixedText}>당신과 딱 맞는 동행을 위해 여행 설문을 시작할게요</Text>

            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.surveyContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>Q. {step < 10 ? `0${step}` : step}</Text>
                        <Text style={styles.questionMainText}>{currentQuestion.question}</Text>
                    </View>

                    {currentQuestion.subText && <Text style={styles.subText}>{currentQuestion.subText}</Text>}

                    {step < questions.length ? (
                        <View style={styles.optionsContainer}>
                            {currentQuestion.options.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.optionButton, selectedOptions[step]?.includes(option) && styles.selectedOption]}
                                    onPress={() => handleSelectOption(option)}
                                >
                                    <Text style={[styles.optionText, selectedOptions[step]?.includes(option) && styles.selectedOptionText]}>
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ) : (
                        <TextInput
                            style={styles.input}
                            placeholder="자기소개를 입력하세요."
                            multiline
                            value={selfIntro}
                            onChangeText={setSelfIntro}
                        />
                    )}
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.nextButton, { opacity: isNextEnabled ? 1 : 0.5 }]} onPress={goToNextStep} disabled={!isNextEnabled}>
                    <Text style={styles.buttonText}>{step < questions.length ? "다음" : "완료"}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        backgroundColor: "#fff",
    },
    progressBarContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: heightPercentage(54),
    },
    progressBar: {
        width: widthPercentage(73),
        height: heightPercentage(4),
        marginHorizontal: widthPercentage(4),
        borderRadius: widthPercentage(10),
    },
    fixedText: {
        fontSize: fontPercentage(14),
        color: "#359D66",
        textAlign: "center",
        marginVertical: heightPercentage(10),
        fontWeight: "bold",
        marginTop: heightPercentage(40),
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    surveyContainer:{
        alignItems:"center",
    },
    questionContainer: {
        width: "90%",
        alignSelf: "flex-start",
        marginLeft: widthPercentage(16),
        marginBottom: heightPercentage(10),
    },
    questionText: {
        fontSize: fontPercentage(22),
        fontWeight: "bold",
        color: "#000",
        marginBottom: heightPercentage(5),
    },
    questionMainText: {
        fontSize: fontPercentage(18),
        fontWeight: "bold",
        textAlign: "left",
    },
    subText: {
        fontSize: fontPercentage(14),
        color: "#808080",
        marginBottom: heightPercentage(10),
        textAlign: "left",
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    optionButton: {
        width: widthPercentage(149),
        height: widthPercentage(149),
        backgroundColor: "#F3F3F3",
        borderRadius: widthPercentage(8),
        margin: widthPercentage(5),
        alignItems: "center",
        justifyContent: "center",
    },
    selectedOption: {
        backgroundColor: "#359D66",
    },
    input: {
        width: widthPercentage(330),
        height: heightPercentage(317),
        borderRadius: widthPercentage(12),
        backgroundColor: "#F3F3F3",
        textAlignVertical: "top",
    },
    buttonContainer: {
        paddingBottom: heightPercentage(20),
        alignItems: "center",
    },
    nextButton: {
        backgroundColor: "#359D66",
        borderRadius: widthPercentage(8),
        width: widthPercentage(356),
        height: heightPercentage(50),
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    }
});

export default SurveyPage;
