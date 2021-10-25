import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IconCheckmark, IconX } from "../../assets/IconPack";
import Checkbox from "../../atomics/checkbox/checkbox";
import Summary from "../../atomics/summary/summary";
import { numberWithCommas } from "../../helper/helper";
import useJakmallStore from "../../store/store";
import Dashboard from "../dashboard/dashboard";

import {
  ContainerInput,
  Content,
  Form,
  H2,
  H3,
  Heading,
  Input,
  Label,
  Section,
  InputSubmit,
  Textarea,
} from "./style";

const Delivery = () => {
  const context = useJakmallStore((state) => state);
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPhoneNumber, setValidPhoneNumber] = useState(false);
  const [isValidDeliveryAddress, setValidDeliveryAddress] = useState("");
  const [isValidDropshipperName, setValidDropshipperName] = useState("");
  const [isValidPhoneNumberDropshipper, setValidPhoneNumberDropshipper] =
    useState(false);
  const [charLeft, setCharLeft] = useState(120);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "all",
    shouldUseNativeValidation: true,
  });

  const onSubmit = (data) => console.log("43", data);

  const NestedEmail = () => {
    return (
      <ContainerInput
        className={
          errors?.email ? "error" : isValidEmail ? "valid" : "container-input"
        }
      >
        <Label htmlFor="email" className="label">
          Email
        </Label>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          })}
          onBlur={async () => {
            trigger("email");
            const result = await trigger("email");
            setValidEmail(result);
          }}
        />
        {errors?.email && <IconX fill="#FF8A00" />}
        {isValidEmail && <IconCheckmark fill="#1BD97B" />}
      </ContainerInput>
    );
  };

  const NestedPhoneNumber = () => {
    return (
      <ContainerInput
        className={
          errors?.email ? "error" : isValidEmail ? "valid" : "container-input"
        }
      >
        <Label htmlFor="phone" isValidPhoneNumber={isValidPhoneNumber}>
          Phone number
        </Label>

        <Input
          type="tel"
          id="phone"
          placeholder="Phone number"
          {...register("phoneNumber", {
            maxLength: { value: 20, message: "Too long" },
            pattern: {
              value:
                /^(?:\+62|\(0\d{2,3}\)|0)\s?(?:361|8[17]\s?\d?)?(?:[ -]?\d{3,4}){2,3}$/,
            },
          })}
          onBlur={async () => {
            trigger("phoneNumber");
            const result = await trigger("phoneNumber");
            setValidPhoneNumber(result);
          }}
        />
        {errors?.email && <IconX fill="#FF8A00" />}
        {isValidEmail && <IconCheckmark fill="#1BD97B" />}
      </ContainerInput>
    );
  };

  const NestedDeliveryAddress = () => {
    return (
      <ContainerInput>
        <Label
          htmlFor="deliveryAddress"
          isValidPhoneNumber={isValidPhoneNumber}
        >
          Delivery address <span>{charLeft}</span>
        </Label>

        <Textarea
          id="deliveryAddress"
          {...register("deliveryAddress", {
            maxLength: { value: 120, message: "Too long" },
          })}
          onChange={async (e) => {
            const result = await e.target.value.length;
            setCharLeft(120 - result);
          }}
        />
        {errors?.email && <IconX fill="#FF8A00" />}
        {isValidEmail && <IconCheckmark fill="#1BD97B" />}
      </ContainerInput>
    );
  };

  const NestedDropshipperName = () => {
    return (
      <ContainerInput>
        <Label
          htmlFor="dropshipperName"
          isValidPhoneNumber={isValidPhoneNumber}
        >
          Dropshipper name
        </Label>

        <Input
          type="tel"
          id="dropshipperName"
          placeholder="Name"
          {...register("dropshipperName", {
            pattern: {
              value:
                /^(?:\+62|\(0\d{2,3}\)|0)\s?(?:361|8[17]\s?\d?)?(?:[ -]?\d{3,4}){2,3}$/,
            },
          })}
          onBlur={async () => {
            trigger("dropshipperName");
            const result = await trigger("dropshipperName");
            setValidDropshipperName(result);
          }}
        />
      </ContainerInput>
    );
  };

  const NestedDropshipperPhoneNumber = () => {
    return (
      <ContainerInput>
        <Label
          htmlFor="phoneDropshipper"
          isValidPhoneNumber={isValidPhoneNumber}
        >
          Dropshipper phone number
        </Label>

        <Input
          type="tel"
          id="phoneDropshipper"
          placeholder="Phone number"
          {...register("phoneDropshipper", {
            minLength: { value: 6, message: "Too short" },
            maxLength: { value: 20, message: "Too long" },
            pattern: {
              value:
                /^(?:\+62|\(0\d{2,3}\)|0)\s?(?:361|8[17]\s?\d?)?(?:[ -]?\d{3,4}){2,3}$/,
            },
          })}
          onBlur={async () => {
            trigger("phoneDropshipper");
            const result = await trigger("phoneDropshipper");
            setValidPhoneNumberDropshipper(result);
          }}
        />
      </ContainerInput>
    );
  };

  return (
    <Dashboard backButtonText="Back to cart">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section className="section">
          <Heading decorationLine className="heading">
            <H2>Delivery details</H2>
          </Heading>
          <Content className="content">
            <NestedEmail />
            <NestedPhoneNumber />
            <NestedDeliveryAddress />
          </Content>
        </Section>

        <Section className="section">
          <Heading className="heading">
            <Checkbox labelTitle="Send as dropshipper" />
          </Heading>
          {context.isDropshipper && (
            <Content className="content">
              <NestedDropshipperName />
              <NestedDropshipperPhoneNumber />
            </Content>
          )}
        </Section>

        <Section divider className="section">
          <Heading className="heading">
            <H3>Summary</H3>
            <p>
              {numberWithCommas(context.totalItemPurchased)} items purchased
            </p>
          </Heading>
          <Content alignBottom className="content">
            <Summary />
          </Content>

          <InputSubmit type="submit" value="Continue to payment" />
        </Section>
      </Form>
    </Dashboard>
  );
};

export default Delivery;
