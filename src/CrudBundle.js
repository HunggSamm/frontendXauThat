import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useImperativeHandle } from "react";
import FormDataWrapper from "./FormDataWrapper";
import TextField from "./TextField";
import React, { forwardRef } from "react";

const EditingForm = forwardRef(({ data = {} }, ref) => {
  const schema = yup.object().shape({
    ResourceCode: yup.string().required(),
  });
  const methods = useForm({
    mode: "onSubmit",
    defaultValues: { ...data, ResourceCode: "Hungsam" },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  useImperativeHandle(ref, () => ({
    submitForm: (onValid, onInvalid) => handleSubmit(onValid, onInvalid)(),
  }));

  const handleSave = (data) => {
    console.log(data);
  };

  const watchData = useWatch({
    control,
    name: ["ResourceCode"],
  });

  return (
    <FormDataWrapper methods={methods}>
      <TextField
        fieldName="ResourceCode"
        control={control}
        errors={errors}
        label="Resource Code"
        disable={false}
      />
      <div>{watchData[0]}</div>
      <button onClick={methods.handleSubmit(handleSave)} type="submit">
        Submit
      </button>
    </FormDataWrapper>
  );
});
export default EditingForm;
