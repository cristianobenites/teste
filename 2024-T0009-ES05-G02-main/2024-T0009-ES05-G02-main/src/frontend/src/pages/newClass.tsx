import FormStepper from "@/components/FormStepper.tsx";
import NavBar from "../components/navBar";
import Avatar from "../components/avatar.tsx";
import imagem from "../assets/react.svg";

export default function NewClass() {
  return (
    <>
      <div>
        <NavBar
          name={"Nome"}
          role={"líder"}
          avatar={
            <Avatar
              profileImage={"imagem"}
              widthImage={"30px"}
              heightImage={"30px"}
            />
          }
        />
      </div>

      <FormStepper></FormStepper>
    </>
  );
}
