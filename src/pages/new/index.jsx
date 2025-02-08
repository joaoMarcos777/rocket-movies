import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { Section } from "../../components/section";
import { MovieItem } from "../../components/movie-item";

import { Container, CustomButton, CustomButtonText, Form } from "./styles";

export function New() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    if (newTag) {
      setTags((prevState) => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <CustomButtonText
              icon={IoIosArrowRoundBack}
              title="Back"
              onClick={handleBack}
            />
            <h1>New Movie</h1>
          </header>

          <div className="inputs-wrapper">
            <Input placeholder="Title" />

            <Input placeholder="Rate (0 to 5)" />
          </div>

          <Textarea placeholder="Observations" />

          <Section title="Tags">
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieItem
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <MovieItem
                placeholder="New tag"
                isNew
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <CustomButton title="Save" />
        </Form>
      </main>
    </Container>
  );
}
