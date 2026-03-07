import { db } from "./firebase";
import { collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore";

export async function saveUserToFirestore(userData: {
    id: string;
    name: string | null;
    email: string | null;
    phone?: string | null;
    college?: string | null;
    course?: string | null;
    studentId?: string | null;
    role: string;
}) {
    try {
        // Use the user's ID as the document ID for easy retrieval
        await setDoc(doc(db, "users", userData.id), {
            ...userData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
        console.log("User saved to Firestore:", userData.id);
    } catch (error) {
        console.error("Error saving user to Firestore:", error);
    }
}

export async function saveEnquiryToFirestore(enquiryData: {
    name: string;
    email: string;
    phone: string;
    message?: string;
    courseName?: string;
}) {
    try {
        const docRef = await addDoc(collection(db, "enquiries"), {
            ...enquiryData,
            createdAt: serverTimestamp(),
            status: "new", // Default status
        });
        console.log("Enquiry saved to Firestore with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error saving enquiry to Firestore:", error);
        throw error;
    }
}


export async function syncExamAttemptToFirestore(attemptData: any) {
    try {
        await addDoc(collection(db, "attempts"), {
            ...attemptData,
            syncedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error syncing attempt to Firestore:", error);
    }
}

export async function syncCertificateToFirestore(certData: any) {
    try {
        await addDoc(collection(db, "certificates"), {
            ...certData,
            syncedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error syncing certificate to Firestore:", error);
    }
}
