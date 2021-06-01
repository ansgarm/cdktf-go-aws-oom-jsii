import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsSmsPreferencesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#default_sender_id SnsSmsPreferences#default_sender_id}.
     */
    readonly defaultSenderId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#default_sms_type SnsSmsPreferences#default_sms_type}.
     */
    readonly defaultSmsType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}.
     */
    readonly deliveryStatusIamRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}.
     */
    readonly deliveryStatusSuccessSamplingRate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}.
     */
    readonly monthlySpendLimit?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}.
     */
    readonly usageReportS3Bucket?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences}.
 */
export declare class SnsSmsPreferences extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html aws_sns_sms_preferences} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: SnsSmsPreferencesConfig);
    private _defaultSenderId?;
    get defaultSenderId(): string;
    set defaultSenderId(value: string);
    resetDefaultSenderId(): void;
    get defaultSenderIdInput(): string | undefined;
    private _defaultSmsType?;
    get defaultSmsType(): string;
    set defaultSmsType(value: string);
    resetDefaultSmsType(): void;
    get defaultSmsTypeInput(): string | undefined;
    private _deliveryStatusIamRoleArn?;
    get deliveryStatusIamRoleArn(): string;
    set deliveryStatusIamRoleArn(value: string);
    resetDeliveryStatusIamRoleArn(): void;
    get deliveryStatusIamRoleArnInput(): string | undefined;
    private _deliveryStatusSuccessSamplingRate?;
    get deliveryStatusSuccessSamplingRate(): string;
    set deliveryStatusSuccessSamplingRate(value: string);
    resetDeliveryStatusSuccessSamplingRate(): void;
    get deliveryStatusSuccessSamplingRateInput(): string | undefined;
    get id(): string;
    private _monthlySpendLimit?;
    get monthlySpendLimit(): string;
    set monthlySpendLimit(value: string);
    resetMonthlySpendLimit(): void;
    get monthlySpendLimitInput(): string | undefined;
    private _usageReportS3Bucket?;
    get usageReportS3Bucket(): string;
    set usageReportS3Bucket(value: string);
    resetUsageReportS3Bucket(): void;
    get usageReportS3BucketInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
