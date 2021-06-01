import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorklinkFleetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#audit_stream_arn WorklinkFleet#audit_stream_arn}.
     */
    readonly auditStreamArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#device_ca_certificate WorklinkFleet#device_ca_certificate}.
     */
    readonly deviceCaCertificate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#display_name WorklinkFleet#display_name}.
     */
    readonly displayName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#name WorklinkFleet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}.
     */
    readonly optimizeForEndUserLocation?: boolean;
    /**
     * identity_provider block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#identity_provider WorklinkFleet#identity_provider}
     */
    readonly identityProvider?: WorklinkFleetIdentityProvider[];
    /**
     * network block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#network WorklinkFleet#network}
     */
    readonly network?: WorklinkFleetNetwork[];
}
export interface WorklinkFleetIdentityProvider {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#saml_metadata WorklinkFleet#saml_metadata}.
     */
    readonly samlMetadata: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#type WorklinkFleet#type}.
     */
    readonly type: string;
}
export interface WorklinkFleetNetwork {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#security_group_ids WorklinkFleet#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#subnet_ids WorklinkFleet#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#vpc_id WorklinkFleet#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet}.
 */
export declare class WorklinkFleet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WorklinkFleetConfig);
    get arn(): string;
    private _auditStreamArn?;
    get auditStreamArn(): string;
    set auditStreamArn(value: string);
    resetAuditStreamArn(): void;
    get auditStreamArnInput(): string | undefined;
    get companyCode(): string;
    get createdTime(): string;
    private _deviceCaCertificate?;
    get deviceCaCertificate(): string;
    set deviceCaCertificate(value: string);
    resetDeviceCaCertificate(): void;
    get deviceCaCertificateInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _optimizeForEndUserLocation?;
    get optimizeForEndUserLocation(): boolean;
    set optimizeForEndUserLocation(value: boolean);
    resetOptimizeForEndUserLocation(): void;
    get optimizeForEndUserLocationInput(): boolean | undefined;
    private _identityProvider?;
    get identityProvider(): WorklinkFleetIdentityProvider[];
    set identityProvider(value: WorklinkFleetIdentityProvider[]);
    resetIdentityProvider(): void;
    get identityProviderInput(): WorklinkFleetIdentityProvider[] | undefined;
    private _network?;
    get network(): WorklinkFleetNetwork[];
    set network(value: WorklinkFleetNetwork[]);
    resetNetwork(): void;
    get networkInput(): WorklinkFleetNetwork[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
