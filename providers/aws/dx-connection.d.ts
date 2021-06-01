import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#bandwidth DxConnection#bandwidth}.
     */
    readonly bandwidth: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#location DxConnection#location}.
     */
    readonly location: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#name DxConnection#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#tags DxConnection#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#tags_all DxConnection#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection}.
 */
export declare class DxConnection extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxConnectionConfig);
    get arn(): string;
    get awsDevice(): string;
    private _bandwidth;
    get bandwidth(): string;
    set bandwidth(value: string);
    get bandwidthInput(): string;
    get hasLogicalRedundancy(): string;
    get id(): string;
    get jumboFrameCapable(): boolean;
    private _location;
    get location(): string;
    set location(value: string);
    get locationInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
