﻿topicarray["0c8b64a123e4aa9a467ce19a78fa9f1d"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003e功能概述\u003c/div\u003e\u003cdiv class=\"prolog-container\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​利用 \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 应用程序，可将其它应用程序（如 \u003c/span\u003e\u003cspan\u003e​Performance Insight\u003c/span\u003e\u003cspan\u003e​）连接到 \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ (MQTT Broker) 或 Unified 精智面板 (Open Pipe)。在 \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 中，可对数据分组并临时保存一段时间。\u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ 借助连接器（如 SIMATIC S7 Connector）直接从工厂接收数据。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​在 \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 中，从 \u003c/span\u003e\u003cspan\u003e​IE Databus\u003c/span\u003e\u003cspan\u003e​ 读取元数据主题；随后基于该元数据创建变量。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​可使用资产和特征建立工业过程结构模型，并将其分配到各个逻辑单元中，例如每个机器一个资产。\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/159227913611_DV_resource.Stream@PNG_180-zh-CHS.png\" docVersionId=\"161694842635\" language=\"zh-CHS\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Flowchart\" data-original-height=\"453\" data-original-width=\"1226\" data-resolution-x=\"180\" data-resolution-y=\"180\" id=\"161694842635_0c8b64a123e4aa9a467ce19a78fa9f1d_159227913611_DV_resource_ID0A204\" data-width=\"661\" /\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003e资产的定义\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​资产是有一个或多个自动化单元（如 PLC）的机器或自动化系统的数字化表示。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​收集并传送描述资产的数据。随后提供这些数据，以供进一步处理和评估。\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003e特征的定义\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​特征是用于对资产进行数据建模的机制。特征基于数据点的逻辑分配将相关数据点（主题）分组。 \u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​示例：机器具有“能耗”特征，其中包含数据点“性能”、“功率”、“电压”等。特征在 \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 中定义，其名称可随意选择。一个特征可以包含若干个变量。\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003e应用程序的函数\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 应用程序提供以下函数：\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​创建和组态资产\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​创建用于数据评估的特征和变量\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​将数据源与特征和变量相关联\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eUnified 精智面板试用版的过期日期\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​试用版 \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 应用程序的免费试用期截至 2023 年 1 月 1 日。如果要继续使用该应用程序，请订购适当的许可证。\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}