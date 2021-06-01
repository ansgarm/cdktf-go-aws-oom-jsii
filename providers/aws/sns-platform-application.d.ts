import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsPlatformApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.
     */
    readonly eventDeliveryFailureTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.
     */
    readonly eventEndpointCreatedTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.
     */
    readonly eventEndpointDeletedTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.
     */
    readonly eventEndpointUpdatedTopicArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.
     */
    readonly failureFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#name SnsPlatformApplication#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#platform SnsPlatformApplication#platform}.
     */
    readonly platform: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#platform_credential SnsPlatformApplication#platform_credential}.
     */
    readonly platformCredential: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#platform_principal SnsPlatformApplication#platform_principal}.
     */
    readonly platformPrincipal?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.
     */
    readonly successFeedbackRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.
     */
    readonly successFeedbackSampleRate?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application}.
 */
export declare class SnsPlatformApplication extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application.html aws_sns_platform_application} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SnsPlatformApplicationConfig);
    get arn(): string;
    private _eventDeliveryFailureTopicArn?;
    get eventDeliveryFailureTopicArn(): string;
    set eventDeliveryFailureTopicArn(value: string);
    resetEventDeliveryFailureTopicArn(): void;
    get eventDeliveryFailureTopicArnInput(): string | undefined;
    private _eventEndpointCreatedTopicArn?;
    get eventEndpointCreatedTopicArn(): string;
    set eventEndpointCreatedTopicArn(value: string);
    resetEventEndpointCreatedTopicArn(): void;
    get eventEndpointCreatedTopicArnInput(): string | undefined;
    private _eventEndpointDeletedTopicArn?;
    get eventEndpointDeletedTopicArn(): string;
    set eventEndpointDeletedTopicArn(value: string);
    resetEventEndpointDeletedTopicArn(): void;
    get eventEndpointDeletedTopicArnInput(): string | undefined;
    private _eventEndpointUpdatedTopicArn?;
    get eventEndpointUpdatedTopicArn(): string;
    set eventEndpointUpdatedTopicArn(value: string);
    resetEventEndpointUpdatedTopicArn(): void;
    get eventEndpointUpdatedTopicArnInput(): string | undefined;
    private _failureFeedbackRoleArn?;
    get failureFeedbackRoleArn(): string;
    set failureFeedbackRoleArn(value: string);
    resetFailureFeedbackRoleArn(): void;
    get failureFeedbackRoleArnInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _platform;
    get platform(): string;
    set platform(value: string);
    get platformInput(): string;
    private _platformCredential;
    get platformCredential(): string;
    set platformCredential(value: string);
    get platformCredentialInput(): string;
    private _platformPrincipal?;
    get platformPrincipal(): string;
    set platformPrincipal(value: string);
    resetPlatformPrincipal(): void;
    get platformPrincipalInput(): string | undefined;
    private _successFeedbackRoleArn?;
    get successFeedbackRoleArn(): string;
    set successFeedbackRoleArn(value: string);
    resetSuccessFeedbackRoleArn(): void;
    get successFeedbackRoleArnInput(): string | undefined;
    private _successFeedbackSampleRate?;
    get successFeedbackSampleRate(): string;
    set successFeedbackSampleRate(value: string);
    resetSuccessFeedbackSampleRate(): void;
    get successFeedbackSampleRateInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
