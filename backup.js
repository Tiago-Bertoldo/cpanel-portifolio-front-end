<div className="input-technologies">
            <label htmlFor="nom">Techonologies : </label>
            <input
              type="text"
              className="input-text"
              name="value"
              onKeyUp={(e) => handleTagsAddr(e)}
            />
            <div className="input-tech">
              <div className="boxer-tags">
                {tagsCreated.map((element, index) => (
                  <span className="tags-btn" key={index}>
                    {element}
                    <span onClick={() => handleDeleteTags(element)}>
                      <AiFillCloseCircle />
                    </span>
                  </span>
                ))}
              </div>
              <span className="error-tags-msg"></span>
            </div>
          </div>


<label htmlFor="url">Url : </label>
<input
  type="text"
  name="url"
  id="url"
  placeholder="https://www.thbertoldo.com/projet"
  {...register("url", {
    required: "true",
    maxLength: 20,
  })}
  onChange={(e) =>
    setFormValues((prevState) => ({
      ...prevState,
      url: e.target.value,
    }))
  }
/>
{errors.url?.type === "required" && (
  <p className="alert-input-null" role="alert">
    Url is required
  </p>
)}