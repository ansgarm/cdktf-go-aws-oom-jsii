import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudhsmV2HsmConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#availability_zone CloudhsmV2Hsm#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#cluster_id CloudhsmV2Hsm#cluster_id}.
     */
    readonly clusterId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#ip_address CloudhsmV2Hsm#ip_address}.
     */
    readonly ipAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#subnet_id CloudhsmV2Hsm#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#timeouts CloudhsmV2Hsm#timeouts}
     */
    readonly timeouts?: CloudhsmV2HsmTimeouts;
}
export interface CloudhsmV2HsmTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#create CloudhsmV2Hsm#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#delete CloudhsmV2Hsm#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm}.
 */
export declare class CloudhsmV2Hsm extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudhsmV2HsmConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _clusterId;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    get hsmEniId(): string;
    get hsmId(): string;
    get hsmState(): string;
    get id(): string;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _timeouts?;
    get timeouts(): CloudhsmV2HsmTimeouts;
    set timeouts(value: CloudhsmV2HsmTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): CloudhsmV2HsmTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
