import UserInput from "../components/atoms/UserInput"

const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        age: null
    })

    const handleInputChange = (e, inputName) => setProfileData((prevData) => ({
        ...prevData,
        [inputName]: e.target.value
    }))

    const handleSubmit = () => { }

    return (
        <form onSubmit={handleSubmit}>
            <UserInput label={"Name"} value={profileData.name} onChange={(e) => handleInputChange(e, "name")} inputType={"text"} placeholder="Enter your name" />
            <UserInput label={"Email"} value={profileData.email} onChange={(e) => handleInputChange(e, "email")} inputType={"email"} placeholder="Enter your email" />
            <UserInput label={"Age"} value={profileData.age} onChange={(e) => handleInputChange(e, "age")} inputType={"number"} placeholder="Enter your age" />
            <button type="submit">Submit</button>
        </form>
    )
}