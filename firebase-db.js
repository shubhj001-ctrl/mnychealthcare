// Firebase Configuration and Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, setDoc, getDocs, query, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCL7lKu2YPbF00X-wI0U83U5vYF4OUVuTE",
  authDomain: "mnychealthcare.firebaseapp.com",
  projectId: "mnychealthcare",
  storageBucket: "mnychealthcare.firebasestorage.app",
  messagingSenderId: "1039065732246",
  appId: "1:1039065732246:web:fee9e8397aa2d1271b9eb7",
  measurementId: "G-1Q29VB9BB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// =====================
// BANNER IMAGE OPERATIONS
// =====================
export async function saveBannerImage(imageUrl) {
  try {
    await setDoc(doc(db, "website", "banner"), {
      imageUrl: imageUrl,
      updatedAt: new Date()
    });
    console.log("Banner image saved to Firestore");
    return true;
  } catch (error) {
    console.error("Error saving banner:", error);
    return false;
  }
}

export async function getBannerImage() {
  try {
    const docSnap = await getDoc(doc(db, "website", "banner"));
    if (docSnap.exists()) {
      return docSnap.data().imageUrl || null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching banner:", error);
    return null;
  }
}

// =====================
// STATISTICS OPERATIONS
// =====================
export async function saveStats(stats) {
  try {
    await setDoc(doc(db, "website", "stats"), {
      clients: stats.clients,
      years: stats.years,
      transactions: stats.transactions,
      uptime: stats.uptime,
      updatedAt: new Date()
    });
    console.log("Stats saved to Firestore");
    return true;
  } catch (error) {
    console.error("Error saving stats:", error);
    return false;
  }
}

export async function getStats() {
  try {
    const docSnap = await getDoc(doc(db, "website", "stats"));
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        clients: data.clients || 520,
        years: data.years || 10,
        transactions: data.transactions || 2567,
        uptime: data.uptime || 99
      };
    }
    // Return defaults if no data exists
    return {
      clients: 520,
      years: 10,
      transactions: 2567,
      uptime: 99
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return {
      clients: 520,
      years: 10,
      transactions: 2567,
      uptime: 99
    };
  }
}

// =====================
// SERVICE IMAGES OPERATIONS
// =====================
export async function saveServiceImages(serviceImages) {
  try {
    await setDoc(doc(db, "website", "serviceImages"), {
      images: serviceImages,
      updatedAt: new Date()
    });
    console.log("Service images saved to Firestore");
    return true;
  } catch (error) {
    console.error("Error saving service images:", error);
    return false;
  }
}

export async function getServiceImages() {
  try {
    const docSnap = await getDoc(doc(db, "website", "serviceImages"));
    if (docSnap.exists()) {
      return docSnap.data().images || {};
    }
    return {};
  } catch (error) {
    console.error("Error fetching service images:", error);
    return {};
  }
}

// =====================
// TESTIMONIALS OPERATIONS
// =====================
export async function addTestimonial(testimonial) {
  try {
    const docRef = await setDoc(doc(db, "testimonials", Date.now().toString()), {
      name: testimonial.name,
      role: testimonial.role,
      rating: testimonial.rating,
      text: testimonial.text,
      createdAt: new Date()
    });
    console.log("Testimonial added to Firestore");
    return true;
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return false;
  }
}

export async function getTestimonials() {
  try {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function updateTestimonial(id, testimonial) {
  try {
    await setDoc(doc(db, "testimonials", id), {
      name: testimonial.name,
      role: testimonial.role,
      rating: testimonial.rating,
      text: testimonial.text,
      createdAt: new Date()
    });
    console.log("Testimonial updated in Firestore");
    return true;
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return false;
  }
}

export async function deleteTestimonial(id) {
  try {
    await deleteDoc(doc(db, "testimonials", id));
    console.log("Testimonial deleted from Firestore");
    return true;
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return false;
  }
}

// =====================
// AUTHENTICATION OPERATIONS
// =====================
export async function adminLogin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Admin logged in:", userCredential.user.email);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }
}

export async function adminLogout() {
  try {
    await signOut(auth);
    console.log("Admin logged out");
    return true;
  } catch (error) {
    console.error("Logout error:", error);
    return false;
  }
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

// =====================
// INITIALIZE DEFAULT DATA
// =====================
export async function initializeDefaultData() {
  try {
    // Initialize stats if not exists
    const statsDoc = await getDoc(doc(db, "website", "stats"));
    if (!statsDoc.exists()) {
      await saveStats({
        clients: 520,
        years: 10,
        transactions: 2567,
        uptime: 99
      });
    }

    // Initialize service images if not exists
    const imagesDoc = await getDoc(doc(db, "website", "serviceImages"));
    if (!imagesDoc.exists()) {
      const defaultImages = {
        1: 'https://loremflickr.com/500/500/healthcare,medical',
        2: 'https://loremflickr.com/500/500/business,meeting',
        3: 'https://loremflickr.com/500/500/documents,filing',
        4: 'https://loremflickr.com/500/500/computer,keyboard',
        5: 'https://loremflickr.com/500/500/money,finance',
        6: 'https://loremflickr.com/500/500/chart,analytics'
      };
      await saveServiceImages(defaultImages);
    }

    // Initialize banner if not exists
    const bannerDoc = await getDoc(doc(db, "website", "banner"));
    if (!bannerDoc.exists()) {
      await saveBannerImage('https://loremflickr.com/1200/600/healthcare');
    }

    console.log("Default data initialized");
  } catch (error) {
    console.error("Error initializing default data:", error);
  }
}
