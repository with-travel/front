import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Not Found" }} />
            <View style={styles.container}>
                <Text style={styles.title}>페이지를 찾을 수 없습니다.</Text>
                <Text style={styles.subtitle}>홈으로 돌아가 다시 시도해주세요.</Text>

                <Link href="/" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>홈으로 가기</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#aaa",
        marginBottom: 30,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#359D66",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});
