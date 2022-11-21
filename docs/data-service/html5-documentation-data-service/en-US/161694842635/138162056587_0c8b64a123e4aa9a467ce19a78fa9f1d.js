﻿topicarray["0c8b64a123e4aa9a467ce19a78fa9f1d"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eFunction overview\u003c/div\u003e\u003cdiv class=\"prolog-container\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Using the \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ app, you connect other apps, such as the \u003c/span\u003e\u003cspan\u003e​Performance Insight\u003c/span\u003e\u003cspan\u003e​, to the \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ (MQTT Broker) or to a Unified Comfort Panel (Open Pipe). In the \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​, you can group the data and save it for a certain time. The \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ receives the data directly from the plant with the aid of connectors, such as a SIMATIC S7 Connector.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​In the \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​, the metadata topic is read out from the \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​; variables can then be created based on this metadata.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​You can model the structure of your industrial process using assets and aspects and divide it into logical units, for example, one asset per machine.\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/159227913611_DV_resource.Stream@PNG_180-en-US.png\" docVersionId=\"161694842635\" language=\"en-US\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Flowchart\" data-original-height=\"453\" data-original-width=\"1226\" data-resolution-x=\"180\" data-resolution-y=\"180\" id=\"161694842635_0c8b64a123e4aa9a467ce19a78fa9f1d_159227913611_DV_resource_ID0A204\" data-width=\"661\" /\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDefinition of an asset\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​An asset is a digital representation of a machine or automation system with one or more automation units (e.g. PLC).\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The data that describes an asset is collected and transferred. The data is then made available for further processing and evaluation.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDefinition of an aspect\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​An aspect is a mechanism for data modeling of assets. Aspects group related data points (topics) based on their logical assignment. \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Example: A machine has an \"Energy consumption\" aspect that contains the datapoints \"Performance\", \"Power\", \"Voltage\", etc. The aspect is defined in the \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ and its name can be freely selected. An aspect can consist of several variables.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eFunctions of the app\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ app offers the following functions:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Create and configure assets\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Creating aspects and variables for data evaluation\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Link data sources with aspects and variables\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eExpiration date of the trial version for the Unified Comfort Panel\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The trial version of the \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ app is free of charge and expires on January 1, 2023. If you want to continue using the app, please order the appropriate license.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}