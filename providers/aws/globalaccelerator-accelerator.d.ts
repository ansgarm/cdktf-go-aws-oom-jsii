import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#enabled GlobalacceleratorAccelerator#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#ip_address_type GlobalacceleratorAccelerator#ip_address_type}.
     */
    readonly ipAddressType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#name GlobalacceleratorAccelerator#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags GlobalacceleratorAccelerator#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags_all GlobalacceleratorAccelerator#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * attributes block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#attributes GlobalacceleratorAccelerator#attributes}
     */
    readonly attributes?: GlobalacceleratorAcceleratorAttributes[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#timeouts GlobalacceleratorAccelerator#timeouts}
     */
    readonly timeouts?: GlobalacceleratorAcceleratorTimeouts;
}
export declare class GlobalacceleratorAcceleratorIpSets extends cdktf.ComplexComputedList {
    get ipAddresses(): string[];
    get ipFamily(): string;
}
export interface GlobalacceleratorAcceleratorAttributes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}.
     */
    readonly flowLogsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}.
     */
    readonly flowLogsS3Bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}.
     */
    readonly flowLogsS3Prefix?: string;
}
export interface GlobalacceleratorAcceleratorTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#create GlobalacceleratorAccelerator#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#update GlobalacceleratorAccelerator#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}.
 */
export declare class GlobalacceleratorAccelerator extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig);
    get dnsName(): string;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get hostedZoneId(): string;
    get id(): string;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    ipSets(index: string): GlobalacceleratorAcceleratorIpSets;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _attributes?;
    get attributes(): GlobalacceleratorAcceleratorAttributes[];
    set attributes(value: GlobalacceleratorAcceleratorAttributes[]);
    resetAttributes(): void;
    get attributesInput(): GlobalacceleratorAcceleratorAttributes[] | undefined;
    private _timeouts?;
    get timeouts(): GlobalacceleratorAcceleratorTimeouts;
    set timeouts(value: GlobalacceleratorAcceleratorTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): GlobalacceleratorAcceleratorTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
