import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#name DataAwsRoute53Zone#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#private_zone DataAwsRoute53Zone#private_zone}.
     */
    readonly privateZone?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#resource_record_set_count DataAwsRoute53Zone#resource_record_set_count}.
     */
    readonly resourceRecordSetCount?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#tags DataAwsRoute53Zone#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#vpc_id DataAwsRoute53Zone#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#zone_id DataAwsRoute53Zone#zone_id}.
     */
    readonly zoneId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone}.
 */
export declare class DataAwsRoute53Zone extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ZoneConfig);
    get callerReference(): string;
    get comment(): string;
    get id(): string;
    get linkedServiceDescription(): string;
    get linkedServicePrincipal(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get nameServers(): string[];
    private _privateZone?;
    get privateZone(): boolean;
    set privateZone(value: boolean);
    resetPrivateZone(): void;
    get privateZoneInput(): boolean | undefined;
    private _resourceRecordSetCount?;
    get resourceRecordSetCount(): number;
    set resourceRecordSetCount(value: number);
    resetResourceRecordSetCount(): void;
    get resourceRecordSetCountInput(): number | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
