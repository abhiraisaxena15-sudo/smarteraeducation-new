/**
 * Form ke State → City dropdown ke liye.
 * Har state ki major cities. Jo city list mein na ho, student
 * "Other" chun ke khud likh sakta hai. Nayi city add karni ho
 * toh bas us state ki list mein naam jod do.
 */
export const OTHER_CITY = 'Other';

export const statesAndCities: Record<string, string[]> = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Kakinada', 'Rajahmundry', 'Anantapur', 'Kadapa'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro'],
  Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur'],
  Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Arrah', 'Begusarai', 'Katihar', 'Chapra', 'Hajipur', 'Sasaram'],
  Chhattisgarh: ['Raipur', 'Bhilai', 'Durg', 'Bilaspur', 'Korba', 'Rajnandgaon', 'Raigarh', 'Jagdalpur'],
  Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Anand', 'Bharuch', 'Mehsana'],
  Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Rohtak', 'Sonipat', 'Yamunanagar', 'Panchkula', 'Kurukshetra', 'Sirsa', 'Bhiwani', 'Rewari'],
  'Himachal Pradesh': ['Shimla', 'Solan', 'Mandi', 'Dharamshala', 'Kangra', 'Kullu', 'Hamirpur', 'Una', 'Bilaspur', 'Baddi'],
  Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih'],
  Karnataka: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Dharwad', 'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari', 'Shivamogga', 'Tumakuru', 'Udupi'],
  Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Palakkad', 'Alappuzha', 'Kottayam', 'Malappuram'],
  'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Rewa', 'Satna', 'Ratlam', 'Dewas', 'Katni', 'Chhindwara'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Navi Mumbai', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Nanded', 'Sangli', 'Jalgaon', 'Akola', 'Latur'],
  Manipur: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur'],
  Meghalaya: ['Shillong', 'Tura', 'Jowai'],
  Mizoram: ['Aizawl', 'Lunglei', 'Champhai'],
  Nagaland: ['Kohima', 'Dimapur', 'Mokokchung'],
  Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak'],
  Punjab: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Pathankot', 'Moga', 'Phagwara', 'Firozpur', 'Kapurthala', 'Sangrur', 'Barnala', 'Fazilka', 'Muktsar', 'Ropar', 'Gurdaspur'],
  Rajasthan: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Sikar', 'Sri Ganganagar', 'Bharatpur', 'Pali', 'Jhunjhunu', 'Churu', 'Hanumangarh', 'Nagaur', 'Barmer', 'Tonk'],
  Sikkim: ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Vellore', 'Erode', 'Tiruppur', 'Thoothukudi', 'Thanjavur'],
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Secunderabad', 'Mahbubnagar', 'Nalgonda'],
  Tripura: ['Agartala', 'Udaipur', 'Dharmanagar'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Noida', 'Greater Noida', 'Ghaziabad', 'Agra', 'Varanasi', 'Prayagraj', 'Meerut', 'Bareilly', 'Aligarh', 'Moradabad', 'Gorakhpur', 'Saharanpur', 'Mathura', 'Jhansi', 'Ayodhya', 'Muzaffarnagar', 'Firozabad', 'Shahjahanpur', 'Rampur', 'Etawah'],
  Uttarakhand: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Nainital'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Kharagpur', 'Malda', 'Haldia'],
  'Andaman and Nicobar Islands': ['Port Blair'],
  Chandigarh: ['Chandigarh'],
  'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Diu', 'Silvassa'],
  Delhi: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'Dwarka', 'Rohini'],
  'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Sopore'],
  Ladakh: ['Leh', 'Kargil'],
  Lakshadweep: ['Kavaratti'],
  Puducherry: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
};

export const states = Object.keys(statesAndCities).sort((a, b) => a.localeCompare(b));
