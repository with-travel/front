import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const SurveyPage = () => {
    const [step, setStep] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [selfIntro, setSelfIntro] = useState("");

    const router = useRouter();

    const questions = [
        {
            id: 1,
            question: "여행을 갈 때, 더 자주 경험하는 편인가요?",
            options: ["바다", "산"],
        },
        {
            id: 2,
            question: "여행을 갈 때, 나와 잘 맞는 여행 방식은?",
            options: ["자연", "도심", "쇼핑", "문화 탐방"],
        },
        {
            id: 3,
            question: "숙소는 어떤 스타일을 선호하나요?",
            options: ["럭셔리 호텔", "아늑한 숙소", "부티크 호텔", "호스텔"],
        },
        {
            id: 4,
            question: "여행에서 가장 중요하게 생각하는 요소는?",
            options: ["맛집 탐방", "액티비티", "사진 찍기", "문화 체험", "휴식", "스포츠"],
        },
    ];

    const handleSelectOption = (option) => {
        setSelectedOptions({ ...selectedOptions, [step]: option });
    };

    const isNextEnabled = step <= questions.length ? selectedOptions[step] : selfIntro.trim() !== "";

    const goToNextStep = () => {
        if (step <= questions.length) {
            setStep(step + 1);
        } else {
            router.push("/MainPage"); 
        }
    };

    return (
        <View style={styles.container}>
            {step <= questions.length ? (
                <View style={styles.surveyContainer}>
                    <Text style={styles.progressText}>질문 {step} / {questions.length}</Text>
                    <Text style={styles.questionText}>{questions[step - 1].question}</Text>

                    <View style={styles.optionsContainer}>
                        {questions[step - 1].options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.optionButton,
                                    selectedOptions[step] === option && styles.selectedOption
                                ]}
                                onPress={() => handleSelectOption(option)}
                            >
                                <Text
                                    style={[
                                        styles.optionText,
                                        selectedOptions[step] === option && styles.selectedOptionText
                                    ]}
                                >
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[styles.nextButton, { opacity: isNextEnabled ? 1 : 0.5 }]}
                        onPress={goToNextStep}
                        disabled={!isNextEnabled}
                    >
                        <Text style={styles.buttonText}>다음</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.surveyContainer}>
                    <Text style={styles.progressText}>마지막 단계</Text>
                    <Text style={styles.questionText}>자기소개서를 입력해주세요.</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="자기소개를 입력하세요."
                        multiline
                        value={selfIntro}
                        onChangeText={setSelfIntro}
                    />

                    <TouchableOpacity
                        style={[styles.nextButton, { opacity: selfIntro.trim() !== "" ? 1 : 0.5 }]}
                        onPress={goToNextStep}
                        disabled={selfIntro.trim() === ""}
                    >
                        <Text style={styles.buttonText}>완료</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    surveyContainer: {
        alignItems: "center",
    },
    progressText: {
        fontSize: 16,
        color: "#359D66",
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    optionsContainer: {
        width: "100%",
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: "#F3F3F3",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
    },
    selectedOption: {
        backgroundColor: "#359D66",
    },
    optionText: {
        fontSize: 16,
    },
    selectedOptionText: {
        color: "white",
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 120,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlignVertical: "top",
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: "#359D66",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default SurveyPage;
