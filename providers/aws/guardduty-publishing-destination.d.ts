import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyPublishingDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#destination_arn GuarddutyPublishingDestination#destination_arn}.
     */
    readonly destinationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#destination_type GuarddutyPublishingDestination#destination_type}.
     */
    readonly destinationType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#detector_id GuarddutyPublishingDestination#detector_id}.
     */
    readonly detectorId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}.
     */
    readonly kmsKeyArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html aws_guardduty_publishing_destination}.
 */
export declare class GuarddutyPublishingDestination extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_publishing_destination.html aws_guardduty_publishing_destination} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GuarddutyPublishingDestinationConfig);
    private _destinationArn;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string;
    private _destinationType?;
    get destinationType(): string;
    set destinationType(value: string);
    resetDestinationType(): void;
    get destinationTypeInput(): string | undefined;
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    private _kmsKeyArn;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    get kmsKeyArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
